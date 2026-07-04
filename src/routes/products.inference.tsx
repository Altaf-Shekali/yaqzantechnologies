import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/products/inference")({
  component: () => <Outlet />,
});
