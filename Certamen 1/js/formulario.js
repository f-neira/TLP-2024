document.addEventListener('DOMContentLoaded', function() {
    //Obtiene el formulario y la subcategoría. (Componente de Bootstrap)
    const wasteType = document.getElementById('wasteType')
    const subCategory = document.getElementById('subCategory')

    //Diccionario de categorias.
    const subCategories = {
        plastic: ['Botellas', 'Envases', 'Bolsas'],
        paper: ['Periódicos', 'Cartón', 'Papel de Oficina'],
        glass: ['Botellas', 'Frascos', 'Cristalería'],
        metal: ['Latas', 'Cables', 'Electrodomésticos Pequeños'],
        electronic: ['Teléfonos Móviles', 'Baterías', 'Componentes de Computadoras']
    }

    //Agrega las opciones de subcategoría al select según la categoría seleccionada.
    wasteType.addEventListener('change', function() {
        const selectedType = this.value
        const options = subCategories[selectedType] || []
        
        //Desactiva el poder seleccionar la primera opción.
        subCategory.innerHTML = '<option value="" disabled selected>Seleccione una subcategoría</option>'
        
        //Recorremos las opciones de las subcategorías.
        options.forEach(option => {
            const opt = document.createElement('option')
            opt.value = option
            opt.textContent = option
            subCategory.appendChild(opt)
        })
    })

    //Envío del formulario.
    const form = document.getElementById('recyclingForm')
    form.addEventListener('submit', function(event) {
        //Previene el envio real del formulario.
        event.preventDefault()

        //Mostrar la alerta.
        alert('¡Solicitud enviada correctamente!')

        //Recargar la página después de aceptar la alerta.
        window.location.reload()
    })
})