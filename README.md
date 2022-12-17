# Tarjeta de crédito válida

* La interfaz está diseñada para un cliente que está buscando 
  realizar una suscripción a una página web y debe validar su 
  tarjeta de crédito. Al inicio cuenta con una indicación simple 
  para que coloque los dígitos de su tarjeta.

* En la interfaz, el usuario encontrará el diseño de una tarjeta 
  donde podrá editar el número seguido de un botón donde le dará 
  click para realizar la validación.

* Se implementó un sistema de alerta que se activa si el cliente 
  intenta validar números de menos de 16 dígitos. Una vez que 
  ingrese un número correcto, al momento de dar click en validar,
  automáticamente se esconderán los dígitos de la tarjeta a excepción
  de los últimos 4. Así mismo, se mostrará un ícono indicando un 
  check verde si es una tarjeta válida o una equis roja si es un 
  número inválido. Este sistema se implementó pensando en las pasarelas 
  de pago de distintas webs o aplicaciones que muestran iconos o 
  coloresque indican la validez de la tarjeta. Además se implementó 
  en el mismo diseño de la tarjeta para que el usuario trabaje en 
  un solo espacio.

* Adicional a ello en la parte superior del diseño de la tarjeta se 
  colocó el logo de la franquicia, el cual cambiará según el arreglo
  de números colocados (sólo se trabajó con visa y mastercard).
  Se realizaron pruebas con los siguientes números de tarjetas, 
  generadas en la página https://www.developmenttools.com/credit-card-generator/ :

* Tarjetas para pruebas
  * master card:
    + 5486307820870179 
    + 5404137500047114
    + 5257273978451377
  * visa:
    + 4280796238993238
    + 4280794978959782
    + 4280799322321266
  - Todas ellas lograron pasar la prueba de validación. 