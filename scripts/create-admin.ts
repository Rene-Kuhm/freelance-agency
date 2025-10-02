import bcrypt from "bcryptjs";
import { database } from "../lib/db";

async function createAdmin() {
  const email = "admin@tecnodespegue.com";
  const password = "admin123";
  const name = "Admin Tecnodespegue";

  // Check if admin already exists
  const existingUser = await database.getUserByEmail(email);
  if (existingUser) {
    console.log("❌ El usuario admin ya existe");
    return;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create admin user
  const admin = await database.createUser({
    email,
    password: hashedPassword,
    name,
    role: "admin",
  });

  console.log("✅ Usuario admin creado exitosamente!");
  console.log(`   Email: ${email}`);
  console.log(`   Password: ${password}`);
  console.log(`   ID: ${admin.id}`);
}

createAdmin()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
