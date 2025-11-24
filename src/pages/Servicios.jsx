function Servicios() {
  const servicios = [
    { nombre: "Cambio de aceite", descripcion: "Servicio rápido y eficiente." },
    { nombre: "Frenos", descripcion: "Revisión y reemplazo de frenos." },
    { nombre: "Suspensión", descripcion: "Diagnóstico y reparación completa." },
  ];

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Nuestros Servicios
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((serv, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{serv.nombre}</h2>
            <p className="text-gray-600">{serv.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;

