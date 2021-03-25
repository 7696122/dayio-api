FROM=prisma-engines/target/release
TO_CLI=node_modules/@prisma/cli
TO_ENGINES=node_modules/@prisma/engines
cp ${FROM}/introspection-engine ${TO_CLI}/introspection-engine-linux-nixos
cp ${FROM}/migration-engine     ${TO_CLI}/migration-engine-linux-nixos
cp ${FROM}/query-engine         ${TO_CLI}/query-engine-linux-nixos
cp ${FROM}/prisma-fmt           ${TO_CLI}/prisma-fmt-linux-nixos

cp ${FROM}/introspection-engine ${TO_ENGINES}/introspection-engine-linux-nixos
cp ${FROM}/migration-engine     ${TO_ENGINES}/migration-engine-linux-nixos
cp ${FROM}/query-engine         ${TO_ENGINES}/query-engine-linux-nixos
cp ${FROM}/prisma-fmt           ${TO_ENGINES}/prisma-fmt-linux-nixos
