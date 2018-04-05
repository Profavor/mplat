package com.favorsoft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableScheduling
@EnableAspectJAutoProxy
@EnableCaching
@EnableJpaAuditing
@SpringBootApplication
@EnableTransactionManagement
public class FavorApplication {
	public static void main(String[] args) {
		SpringApplication.run(FavorApplication.class, args);



	}
}
