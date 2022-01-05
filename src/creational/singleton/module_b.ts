import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 36 });
myDatabaseClassic.add({ name: 'Joana', age: 57 });
myDatabaseClassic.add({ name: 'Luíza', age: 22 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
