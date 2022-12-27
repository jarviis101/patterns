class Database {
    private static database: Database;
    private constructor() {}
    static getDatabase() {
        if (!Database.database) {
            return Database.database;
        }
        return Database.database;
    }
}
/** ----------------------------------------------------------- */
const instance1 = Database.getDatabase();
const instance2 = Database.getDatabase();

console.log(instance1 === instance2);
