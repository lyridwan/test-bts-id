const db = require("../Configs/db");
const shopping = {};

shopping.getAll= () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM public.shopping ORDER BY id ASC")
        .then((res) => {
          resolve(res.rows)
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


shopping.get = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.shopping WHERE id = '${id}'`)
        .then((res) => {
            resolve(res.rows);
        })
        .catch((err) => {
            reject("id tidak ditemukan");
        });
    });
};

shopping.add = (data) =>{
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.shopping(name, createddate) VALUES ('${data.name}', '${data.createddate}')`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject("Data tidak lengkap")
        });
    });
};

shopping.update = (data) =>{
  return new Promise((resolve, reject) => {
      db.query(`UPDATE public.shopping SET name='${data.name}', SET createddate='${data.createddate}' WHERE id=${data.id}`)
      .then((res) => {
          resolve(data)
      })
      .catch((err) => {
          reject("Cek data")
      });
  });
};

shopping.del = (id) =>{
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.shopping WHERE id=${id}`)
        .then((res) => {
            resolve({msg: 'berhasil delete', id});
        })
        .catch((err) => {
            reject("id tidak ditemukan");
        });
    });
};

  
module.exports = shopping;