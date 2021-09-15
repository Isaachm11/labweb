function Usuarios({ data }) {
  return data.map((usuario) => <li key={usuario.id}>{usuario.name}</li>);
}

export default Usuarios;
