package com.backend;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

@RestController
public class GreetingController {
    private HttpSession session;

    @Autowired
    public GreetingController(HttpSession session) {
        // フィールドに代入する
        this.session = session;
    }

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        String n = (String) this.session.getAttribute("name");
        System.out.println(n);
        this.session.setAttribute("name", name);
        n = (String) this.session.getAttribute("name");
        System.out.println(n);
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

}