import 'reflect-metadata';
import { AppDataSource } from '../data-source.js';
import { User } from '../entities/User.js';

async function seed() {
  await AppDataSource.initialize();

  const userRepository = AppDataSource.getRepository(User);

  const users = [
    userRepository.create({
      name: 'Raghav',
      age: 22,
      email: 'raghav@seed.com',
      role: 'moderator'
    }),

    userRepository.create({
      name: 'Lal',
      age: 23,
      role: 'user',
      email: 'lal@seed.com'
    }),

    userRepository.create({
      email: "manjil@seed.com",
      name: 'Manjil',
      age: 20
    })
  ];

  await userRepository.save(users);

  console.log("Users seeded successfully");

  await AppDataSource.destroy();
}

seed().catch((error) => {
  console.error('Seeding failed: ', error);
});