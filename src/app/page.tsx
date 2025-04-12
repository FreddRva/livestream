'use client';

import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [streams, setStreams] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/streams")
      .then((res) => res.json())
      .then((data) => setStreams(data.streams))
      .catch((error) => console.error("Error al obtener streams:", error));
  }, []);

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Login con Google</button>
      ) : (
        <div>
          <button onClick={() => signOut()}>Cerrar sesión</button>
          <h1>Streams Activos:</h1>
          <ul>
            {streams.map((stream) => (
              <li key={stream}>{stream}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
