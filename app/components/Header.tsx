"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Optional: prevent background scrolling when menu is open
        if (typeof window !== 'undefined') {
            document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
        }
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
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
                    <Link href="/contacts" className={styles.link}>Контакты</Link>
                    <Link href="/docs" className={styles.link}>Договоры</Link>
                </nav>

                <a
                    href="tel:+79039267748"
                    className={styles.whatsappBtn}
                >
                    +7 (903) 926-77-48
                </a>

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

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <nav className={styles.mobileNav}>
                    <Link href="/finder" className={styles.mobileLink} onClick={closeMenu}>Поиск тура</Link>
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
