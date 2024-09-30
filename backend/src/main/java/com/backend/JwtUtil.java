package com.backend;

import java.util.Date;
import java.util.List;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.Cookie;

@Component
public class JwtUtil {
    private SecretKey SECRET_KEY = null; // 環境変数で管理するのが望ましい
    private static final Long EXPIRATION_TIME = 1000L * 60L * 60L * 1L;

    public static Cookie setCookie(String path, String name,
            String value, int maxAge) {
        Cookie cookie = new Cookie(name, value);
        cookie.setMaxAge(maxAge);
        cookie.setPath(path);
        // httpsで稼働している環境であればCookieが暗号化されるようSecure属性をつける
        cookie.setSecure(true);
        return cookie;
    }

    public String generateToken(String username) {
        // 生成のため、日時データを取得する
        Date issuedAt = new Date();
        Date notBefore = new Date(issuedAt.getTime());
        Date expiresAt = new Date(issuedAt.getTime() + EXPIRATION_TIME);

        String secretKey = "hello";

        // ヘッダー部へのアルゴリズムとハッシュ値を指定する
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        // トークンの生成
        String token = JWT.create()
                .withIssuer("HmacJwtProducer") // トークン発行者情報
                .withSubject("ID12345") // トークンの主体
                .withAudience(username) // トークンの利用者（メールアドレスを用いてトークンを一意にする）
                .withIssuedAt(issuedAt) // 発行日時
                .withNotBefore(notBefore) // トークンの有効期間開始時間
                .withExpiresAt(expiresAt) // トークンの有効期間終了時間 今回はログアウト、セッションタイムアウトまで保持
                .sign(algorithm); // アルゴリズム指定して、署名を行う
        return token;
    }

    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().verifyWith(SECRET_KEY).build().parseSignedClaims(token).getPayload();
    }

    public boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }

    public boolean validateToken(String token, String username) {
        final String extractedUsername = extractUsername(token);
        return (extractedUsername.equals(username) && !isTokenExpired(token));
    }

    // セッショントークン情報に含まれたメールアドレスを取得する処理
    public String decodeJwt(String token) {
        DecodedJWT decodedJWT;

        String secretKey = "hello";
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer("HmacJwtProducer")
                .withSubject("ID12345")
                .build();
        try {
            decodedJWT = verifier.verify(token);
        } catch (JWTVerificationException e) {
            System.out.println(e);
            return "error";
        }
        List<String> userEmailList = decodedJWT.getAudience();
        String userEmail = userEmailList.get(0);
        return userEmail;
    }
}
