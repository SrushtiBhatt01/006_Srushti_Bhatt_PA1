const mysql = require('nodejs-mysql').default;

const conn = ({
    host: "localhost",
    user: "root",
    password: "root",
    database: "7thsem"
});

const db = mysql.getInstance(conn);

db.connect()
    .then(() => {
        console.log(`Connected!!`)

        var sql = "INSERT INTO employeetb (empid,empname,dob,gender) VALUES (104,'pqr','26-10-2002','male')";
        console.log("Record Inserted!!");
        return db.exec(sql);
    })

    .then(() => {
        return db.exec("SELECT * FROM employeetb");

    })

    .then((result) => {
        console.log('Employee id \t Employee Name \t Date of Birth \t Gender');
        for (var i in result) {
            console.log(result[i].empid + "\t\t" + result[i].empname + " \t\t " + result[i].dob + " \t\t " + result[i].gender);
        }
    })

    .catch((err) => {
        console.log("Error: " + err);
        process.exit(0);
    })