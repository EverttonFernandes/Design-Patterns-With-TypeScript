import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 39 });
myDatabaseClassic.add({ name: 'Maria', age: 60 });
myDatabaseClassic.add({ name: 'Eduardo', age: 21 });

export { myDatabaseClassic };
