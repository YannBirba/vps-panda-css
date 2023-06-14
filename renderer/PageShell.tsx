import React from 'react'
import logo from './logo.png'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './index.css'
import { Link } from './Link'
import { css } from '../styled-system/css'
import { useColorMode } from './hooks/useColorMode'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  const { toggle } = useColorMode();
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <Logo />
            <Link variant='navLink' href="/">
              Home
            </Link>
            <Link variant='navLink' href="/about">
              About
            </Link>
             <button
              name="theme-toggle"
              onClick={toggle}
              className={
                "panda-theme-toggle-button " +
                css({
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  width: 35,
                  height: 35,
                  bg: "bg.surface",
                  background: "bg.accent",
                  mt: 15,
                  pt: 3,
                  pl: 7,
                  cursor: "pointer",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
                  _before: {
                    position: "absolute",
                  },
                })
              }
            />
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={ css({
        display: "flex",
        maxWidth: "900px",
        margin: "auto",
      }) }
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={ css({
        padding: "20px",
        gap: "10px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }) }
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        css({
          padding: "20px",
          borderLeft: { base: "2px solid" },
          borderLeftColor: { base: "gray.400" },
          minHeight: "100vh",
        })
      } 
    >
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div
      className={
        css({
          marginTop: "20px",
          marginBottom: "10px",
          borderRadius: 9999,
          overflow: "hidden",
          transition: "filter 0.3s ease-in-out",
          filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.3))",
          userSelect: "none",
          _hover: {
            filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.4))",
          },
        })
      }
    >
      <a href="/">
        <img
          className={
            css({
              _dark: {
                filter: "saturate(0.5)",
              }
            })
        }
          src={ logo } height={ 64 } width={ 64 } alt="logo" />
      </a>
    </div>
  )
}
