import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Index() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/profileclient");
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Link href="/api/auth/login" passHref>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main className="flex-grow">
        <div className="p-8">
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Home Page!
          </Typography>
          <Typography variant="body1">
            This is the home page of the application.
          </Typography>
        </div>
      </main>
    </div>
  );
}

