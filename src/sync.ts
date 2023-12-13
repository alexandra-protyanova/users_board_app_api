// import { Color, User } from './models';
// import { sequelize } from './utils/initDb';
// 
// 
// 
// const usersFromServer = [
//   { name: 'Joe Biden', carColorId: 5 },
//   { name: 'Elon Musk', carColorId: 4 },
//   { name: 'Pan Roman', carColorId: 2 },
// ];
// 
// export const sync = async () => {
//   return sequelize.sync({ force: true })
// }
// 
// export const seedColors = async () => {
//   return Color.bulkCreate(colorosFromServer)
// } 
// 
// export const seedUsers = async () => {
//   return User.bulkCreate(usersFromServer)
// } 
// 
// sync()
//   .then(seedColors)
//   .then(seedUsers)
// 
