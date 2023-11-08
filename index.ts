import type { OIDCConfig } from "@auth/core/providers";

type Profile = {
  id: string;
};

const provider = {
  type: "oidc",
  id: "provider",
  name: "provider",
  checks: ["none"],
} satisfies OIDCConfig<Profile>;
