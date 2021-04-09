'use strict';

const utils = require('../utils');
const config = require('../../../config');
const sql = require('mssql');

//ms sql server

const getProfiles = async () => {
    let pool = new sql.ConnectionPool(config.sql);
    return new Promise(async (resolve, reject) => {
        try {
            const sqlQueries = await utils.loadSqlQueries('profiles');
            pool.connect().then(() => {
                const request = new sql.Request(pool);
                request.query(sqlQueries.profilelist).then(recordset => {
                    pool.close();
                    resolve(recordset.recordset)
                }).catch(err => {
                    pool.close();
                    reject(err);
                })
            }).catch(err => {
                reject(err);
            })
        } catch (err) {
            reject(err);
        }
    })
}

const getProfileById = async (profileId) => {
    let pool = new sql.ConnectionPool(config.sql);
    return new Promise(async (resolve, reject) => {
        try {
            const sqlQueries = await utils.loadSqlQueries('profiles');
            pool.connect().then(() => {
                const request = new sql.Request(pool);
                request.input('PersonID', sql.Int, profileId)
                    .query(sqlQueries.profileById).then(recordset => {
                        pool.close();
                        resolve(recordset.recordset)
                    }).catch(err => {
                        pool.close();
                        reject(err);
                    })
            }).catch(err => {
                reject(err);
            })
        } catch (err) {
            reject(err);
        }
    })
}

const createProfile = async (profile) => {
    let pool = new sql.ConnectionPool(config.sql);
    return new Promise(async (resolve, reject) => {
        try {
            const sqlQueries = await utils.loadSqlQueries('profiles');
            pool.connect().then(() => {
                const request = new sql.Request(pool);
                request
                    .input('LastName', sql.NVarChar(255), profile.LastName)
                    .input('FirstName', sql.NVarChar(255), profile.FirstName)
                    .query(sqlQueries.createProfile).then(recordset => {
                        pool.close();
                        resolve(recordset.recordset)
                    }).catch(err => {
                        pool.close();
                        reject(err);
                    })
            }).catch(err => {
                reject(err);
            })
        } catch (err) {
            reject(err);
        }
    })
}

const updateProfile = async ({ PersonId, ...profile }) => {
    let pool = new sql.ConnectionPool(config.sql);
    return new Promise(async (resolve, reject) => {
        try {
            const sqlQueries = await utils.loadSqlQueries('profiles');
            pool.connect().then(() => {
                const request = new sql.Request(pool);
                request
                    .input('LastName', sql.NVarChar(255), profile.LastName)
                    .input('FirstName', sql.NVarChar(255), profile.FirstName)
                    .input('PersonId', sql.Int, PersonId)
                    .query(sqlQueries.updateProfile).then(recordset => {
                        pool.close();
                        resolve(recordset.recordset)
                    }).catch(err => {
                        pool.close();
                        reject(err);
                    })
            }).catch(err => {
                reject(err);
            })
        } catch (err) {
            reject(err);
        }
    })
}


const deleteProfile = async (profileId) => {
    let pool = new sql.ConnectionPool(config.sql);
    return new Promise(async (resolve, reject) => {
        try {
            const sqlQueries = await utils.loadSqlQueries('profiles');
            pool.connect().then(() => {
                const request = new sql.Request(pool);
                request
                    .input('PersonId', sql.Int, profileId)
                    .query(sqlQueries.deleteProfile).then((res) => {
                        pool.close();
                        resolve({ message: 'Delete record has profileId = ' + profileId + ' successfully' });
                    }).catch(err => {
                        pool.close();
                        reject(err);
                    })
            }).catch(err => {
                reject(err);
            })
        } catch (err) {
            reject(err);
        }
    })
}

//Mysql

// const getEvents = async () => {
//     try {
//         const sqlQueries = await utils.loadSqlQueries('events');
//         let con = sql.createConnection({
//             host: "localhost",
//             user: "root",
//             password: "mysqlpassword",
//             database: "student"
//         });
//         console.log(sqlQueries);
//         con.connect(function (err) {
//             if (err) throw err;
//             con.query(sqlQueries.eventslist, function (err, results) {
//                 if (err) throw err;
//                 console.log(results);
//             })
//         });
//     } catch (err) {
//         return err;
//     }
// }

module.exports = {
    getProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile
}