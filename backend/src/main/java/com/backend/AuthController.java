package com.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    // CSRFトークンを返すためだけのパス
    @PostMapping("/csrf")
    public CsrfToken csrf(CsrfToken token) {
        return token;
    }

    @PostMapping("/logintest")
    public ResponseEntity<String> login(HttpServletResponse response, @RequestBody String username) {
        // ユーザー認証ロジック (例：ユーザー名とパスワードの検証)
        System.out.println("token生成中..." + username);
        String token = jwtUtil.generateToken(username);
        System.out.println(token);
        // Cookie cookie = JwtUtil.setCookie("/", "test_cookie_name",
        // "test_cookie_value", 5 * 60);
        String username2 = jwtUtil.decodeJwt(token);
        System.out.println(username2);
        String username3 = jwtUtil.decodeJwt(
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJJRDEyMzQ1IiwiYXVkIjoiXCJoYXlzaGlcIiIsIm5iZiI6MTcyNzY0OTE1MiwiaXNzIjoiSG1hY0p3dFByb2R1Y2VyIiwiZXhwIjoxNzI3NjUyNzUyLCJpYXQiOjE3Mjc2NDkxNTJ9.0q7UU0IoDfa_X7hEp2crbLyLyu9u1FdDwqUZULC67k4");
        System.out.println(username3);
        ResponseCookie cookie = ResponseCookie.from("jwt-test-token", token)
                .httpOnly(true)
                .secure(true) // 本番環境ではtrueにする（HTTPS）
                .path("/")
                .maxAge(7 * 24 * 60 * 60) // 1週間有効
                .build();

        return ResponseEntity.ok()
                .header("Set-Cookie", cookie.toString())
                .body("Login successful");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        ResponseCookie deleteCookie = ResponseCookie.from("fsef", "")
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(0)
                .build();

        return ResponseEntity.ok()
                .header("Set-Cookie", deleteCookie.toString())
                .body("Logout successful");
    }
}
