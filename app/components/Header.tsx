"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import styles from './header.module.css';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const loginRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
                setIsLoginOpen(false);
            }
        };
        if (isLoginOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLoginOpen]);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsLoginOpen(false);
        // Optional: prevent background scrolling when menu is open
        if (typeof window !== 'undefined') {
            document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
        }
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setIsLoginOpen(false);
        if (typeof window !== 'undefined') {
            document.body.style.overflow = '';
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    ЛАКИ-ТУР
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link href="/finder" className={styles.link}>Поиск тура</Link>
                    <Link href="/exchange" className={styles.link}>Обмен валюты</Link>
                    <Link href="/contacts" className={styles.link}>Контакты</Link>
                    <Link href="/docs" className={styles.link}>Договоры</Link>
                </nav>

                <div className={styles.actions}>
                    <a
                        href="tel:+79039267748"
                        className={styles.whatsappBtn}
                    >
                        +7 (903) 926-77-48
                    </a>

                    <div className={styles.userMenuWrapper} ref={loginRef}>
                        <button 
                            className={styles.userBtn} 
                            onClick={() => setIsLoginOpen(!isLoginOpen)}
                            aria-label="Вход для пользователей"
                        >
                            <User size={24} />
                        </button>

                        <div className={`${styles.loginDropdown} ${isLoginOpen ? styles.open : ''}`}>
                            <form action="https://id60407.u-on.ru/login.php" method="POST" target="_blank">
                                <div className={styles.formGroup}>
                                    <img src="https://id60407.u-on.ru/images/logo.png" className={styles.logoImg} alt="Логотип" />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="email" name="login" className={styles.formControl} placeholder="Введите e-mail" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="password" name="password" className={styles.formControl} placeholder="Введите пароль" required />
                                </div>
                                <button type="submit" name="sbm" className={styles.btnSuccess}>Войти</button>
                            </form>
                        </div>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>

        {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <nav className={styles.mobileNav}>
                    <Link href="/finder" className={styles.mobileLink} onClick={closeMenu}>Поиск тура</Link>
                    <Link href="/exchange" className={styles.mobileLink} onClick={closeMenu}>Обмен валюты</Link>
                    <Link href="/contacts" className={styles.mobileLink} onClick={closeMenu}>Контакты</Link>
                    <Link href="/docs" className={styles.mobileLink} onClick={closeMenu}>Договоры</Link>
                </nav>
                <div className={styles.mobileContact}>
                    <a
                        href="tel:+79039267748"
                        className={styles.mobileWhatsAppBtn}
                        onClick={closeMenu}
                    >
                        +7 (903) 926-77-48
                    </a>
                </div>
            </div>
        </header>
    );
}
