# Tarjeta de presentacion

Esta pagina web fue diseñada e implementada por [Axel Padilla](https://axel-padilla.vercel.app). En este documento se describe como se puede personalizar las caracteristicas de esta pagina alterando archivos de esta misma carpeta

## Tabla de contenidos

- [Tarjeta de presentacion](#tarjeta-de-presentacion)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Directorios](#directorios)
    - [/data](#data)
    - [/img](#img)
    - [/mail-templates](#mail-templates)
    - [/video](#video)
  - [Archivos](#archivos)
    - [/index.html](#indexhtml)
    - [/manifest.json](#manifestjson)
    - [/vcard.vcf](#vcardvcf)
    - [/robots.txt](#robotstxt)
  - [Otras Opciones](#otras-opciones)
  - [Contacto](#contacto)

## Directorios

Aqui describire cada uno de los directorios y sus funciones

### /data

Este es el directorio mas importante, donde podras editar la informacion personal de la persona que se representa en la tarjeta de presentacion, asi como otros aspectos.

Este directorio cuenta con 4 archivos:

- `ui.en.json` es donde se configuran aspectos de la interfaz tales como botones, titulos, descripciones, etc, en **Ingles**
  - Por ejemplo, para cambiar el titulo de la pantalla de **"Compartir"** en **Ingles** se cambiaria a lo siguiente
  ```javascript
  {
    "pages": {
      // ...
      // Otras paginas
      // ...
      "share": {
        "h1": "Escribe aqui el nuevo titulo"
        // ...
        // Otras opciones
        // ...
      }
    }
  }
  ```
- `ui.es.json` es exactamente lo mismo que `ui.en.json`, solo que modifica los contenidos en **Español**
- `data.es.json` es parecido a los dos anteriores, la diferencia es que este configura la informacion personal de la persona que se mostrará en la tarjeta de presentación. Piensa en `data.es.json` como el archivo donde cambiaras el contenido
  - Por ejemplo, para agregar una tarjeta nueva en la seccion de **"Acerca de"** en **Español**
  ```javascript
  {
    "personalInformation": {
      "name" : "Jane Doe"
      // ...
      // Mas campos
      // ...
      "about" : {
        "cards" :  [
          // cartas anteriores, separadas por comas
          {
            // Link de la imagen, puede ser externo o relatio
            "img-src": "img/profile.src",
            // Titulo de la tarjeta
            "title": "Escribe un titulo",
            // Descripcion de la tarjeta
            "description": "Escribe la descripcion",
            // Boton Call to action
            "cta": ["Texto del boton", "Enlace.com.mx"]
          }
        ]
      }
    }
  }
  ```
- Por ultimo `data.en.json` tiene la misma funcionalidad que `data.es.json` pero cambia los datos cuando la pagina esta en **Inglés**

### /img

Este directorio guarda las imagenes que son usadas en la pagina web, para remplazar como se ven algunas de las imagenes, solo remplaza las siguientes imagenes con cualquiera de tu preferencia. Estos son los nombres de archivos que tienen que estar presenetes

| Archivo      | Descripcion |
| ----------- | ----------- |
| `banner.jpeg` | Banner de la pagina principal |
| `profile.jpg` | Foto de perfil de la persona en la pagina |
| `qr_code.png` | Codigo QR que enlace a la pagina (Actualmente apunta [aqui](https://tarjeta-presentacion.vercel.app)) |
| `vcard.png` | Codigo QR que contiene la vCard (Crea la tuya [aqui](https://www.qr-code-generator.com/solutions/vcard-qr-code/)) |
| `mail.png`   | Icono de mail en los email templates |
| `phone.png`   | Icono de telefono en los email templates |
| `whatsapp.png`   | Icono de whatsapp en los email templates |

### /mail-templates

Aqui se incluye `index.html` como el email template. Cambiar este template no afecta el envio de correos, si quieres cambiar el template de correo, debes hacerlo directamente en [EmailJS](https://www.emailjs.com/)

### /video

Contiene el archivo `video.mp4`, que es el video que se muestra en la seccion de **"Video"**

## Archivos

### /index.html

Este es el punto de entrada a la pagina web, **No lo edites directamente, a menos de que sepas como funciona [React](https://reactjs.org/)**

Importante: El contenido de la pagina se agrega Client Side a traves de Javascript, por lo que no encontraras nada de contenido en este archivo

### /manifest.json

El manifiesto que se utiliza para que la pagina sea instalable como PWA

### /vcard.vcf

El archivo que se usa como tarjeta vCard, para añadir el contacto sin escanear codigo QR. Puedes generar la tuya [aqui](https://vcardmaker.com/)


### /robots.txt

Este archivo describe las reglas que siguen los bots al entrar a tu pagina web. Mas acerca de esto [aqui](https://developers.google.com/search/docs/advanced/robots/intro)

## Otras Opciones

En caso de querer personalizar otras opciones que no esten incluidas aqui, es altamente recomendado hacerlo descargando el [repositorio principal](https://github.com/FadedController/tarjeta-presentacion) y despues generar otro folder de produccion como se indica en el README de ese repositorio

## Contacto
Siempre estoy disponible para resolver dudas y hacer modificaciones sencillas sin costo, solo tienes que contactarme a adpadillar25@gmail.com