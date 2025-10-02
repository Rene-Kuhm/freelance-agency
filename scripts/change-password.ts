import bcrypt from "bcryptjs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function main() {
  console.log("=== Generador de Hash de Contraseña ===\n");

  const password = await question("Ingresa la nueva contraseña: ");

  if (password.length < 8) {
    console.error("\n❌ Error: La contraseña debe tener al menos 8 caracteres");
    rl.close();
    return;
  }

  console.log("\nGenerando hash seguro...\n");

  const hash = await bcrypt.hash(password, 10);

  console.log("✅ Hash generado exitosamente!\n");
  console.log("Copia este hash en lib/db.ts en la variable ADMIN_PASSWORD_HASH:\n");
  console.log(`const ADMIN_PASSWORD_HASH = "${hash}";\n`);
  console.log("⚠️  IMPORTANTE: Guarda esta contraseña en un lugar seguro.\n");

  rl.close();
}

main().catch((error) => {
  console.error("Error:", error);
  rl.close();
  process.exit(1);
});
