  let infUser = {
    uid:user.uid,
    name:user.displayName,
    email:user.email,
    photo:user.photoURL,
  }
  //Guardando los datos en localStorage
  localStorage.setItem('name',infUser.name);
  localStorage.setItem('imgUs',infUser.photo);
