'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function TestAuth() {
  const { data: session, status } = useSession()

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>NextAuth Test</h1>

      <div
        style={{
          padding: '1rem',
          marginBottom: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      >
        <p>
          <strong>Status:</strong> {status}
        </p>
        {session ? (
          <div>
            <p>
              <strong>Logged in as:</strong> {session.user?.email}
            </p>
            <p>
              <strong>Name:</strong> {session.user?.name}
            </p>
            <p>
              <strong>Address:</strong> {session.user?.address}
            </p>
            <button
              onClick={() => signOut()}
              style={{
                padding: '0.5rem 1rem',
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            style={{
              padding: '0.5rem 1rem',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  )
}
