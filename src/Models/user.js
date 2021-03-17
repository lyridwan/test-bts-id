const db = require("../Configs/db");
const user = {};

user.getAll= () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM public.user ORDER BY id ASC")
        .then((res) => {
          resolve(res.rows)
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


user.getByEmail = (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.user WHERE email='${email}'`)
        .then((res) => {
          resolve(res.rows)
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  user.getByUserName = (username) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.user WHERE username='${username}'`)
        .then((res) => {
          resolve(res.rows)
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


user.add = (data) =>{
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.user(username, 
            password, email, phone, country, city, 
            postcode, name, address) 
            VALUES 
        ('${data.username}', 
        '${data.password}', 
        '${data.email}', 
        '${data.phone}', 
        '${data.country}', 
        '${data.city}', 
        '${data.postcode}', 
        '${data.name}', 
        '${data.address}')`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject("Data not completed")
        });
    });
};

user.update = (data) =>{
  return new Promise((resolve, reject) => {
      db.query(`UPDATE public.user SET 
      username='${data.username}', 
      password='${data.password}',
      email='${data.email}',
      phone='${data.phone}',
      country='${data.country}',
      city='${data.city}',
      postcode='${data.postcode}',
      name='${data.name}',
      address='${data.address}',
      WHERE id=${data.id}`)
      .then((res) => {
          resolve(data)
      })
      .catch((err) => {
          reject("Check Data")
      });
  });
};

user.del = (id) =>{
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.user WHERE id=${id}`)
        .then((res) => {
            resolve({msg: 'success deleted', id});
        })
        .catch((err) => {
            reject("id not found");
        });
    });
};

  
module.exports = user;