import React, { useEffect } from "react";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

const useStyles = styled("div")({
  flexGrow: 1,
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography variant="h6">
            {user ? user.name : ""}
          </StyledTypography>
          <Button color="inherit">
            <a href="/api/auth/logout">Logout</a>
          </Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default ProfileClient;
