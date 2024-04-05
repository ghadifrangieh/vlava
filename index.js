

var _services_content=`
<div class="icon"><i class="bi bi-brightness-high"></i></div>
<h4 class="title"><a href="">${services.title}</a></h4>
<p class="description">${services.description}</p>
`

fetch('http://localhost:3000/services')
      .then(response => response.json())
      .then(json => {

        var services_row=document.getElementById('services_row');
        services.forEach(services => { //services wihout element because here we want eash element in services[]
        
            var _current_content=`
        <div class="icon"><i class="bi bi-brightness-high"></i></div>
        <h4 class="title"><a href="">${services.title}</a></h4>
        <p class="description">${services.description}</p>
        `
        
            var _div =document.createElement('div');
            _div.innerHTML=_current_content;
        
            _div.className='col-lg-4 col-md-6 icon-box';
            services_row.appendChild(_div);
        });


      })



