var teamItems = document.querySelectorAll('.team__item');

for (var i = 0; i < teamItems.length; i++) {

  var teamItemImg = teamItems[i].querySelector('.team__item-image');
  var teamItemContacts = teamItems[i].querySelector('.team__item-contacts');

  teamItemImg.addEventListener('mouseover', function(event){ //при наведении на team__item-image
    event.preventDefault();
    this.classList.add('active'); //добавляем класс active team__item-image
    this.nextElementSibling.classList.add('active'); //добавляем класс active team__item-contacts
  });

  teamItemImg.addEventListener('mouseout', function(event){
    event.preventDefault();
    this.classList.remove('active');
    this.nextElementSibling.classList.remove('active');
  });

  teamItemContacts.addEventListener('mouseover', function(event){ //при наведении на team__item-contacts
    event.preventDefault();
    this.classList.add('active'); //добавляем класс active team__item-contacts
    this.previousElementSibling.classList.add('active'); //добавляем класс active team__item-image
  });

  teamItemContacts.addEventListener('mouseout', function(event){
    event.preventDefault();
    this.classList.remove('active');
    this.previousElementSibling.classList.remove('active');
  });
}