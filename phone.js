const loadPhone=async(searchText)=>{
  const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data=await res.json();
  const phones=data.data;
  // console.log(phones);
  displayPhones(phones);
}

const displayPhones=phones=>{
  // console.log(phones);

  // 1
  const phoneContainer=document.getElementById('phone-container');

  // reset
  phoneContainer.textContent='';

  phones.forEach(phone=>{
    // console.log(phone);

    // 2
    // Create div
    const phoneCard=document.createElement('div');
    phoneCard.classList=`card p-4 bg-gray-100 shadow-xl`;

    // 3
    phoneCard.innerHTML=`
    <figure><img src="${phone.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
    `;

    // 4
    // Append child
    phoneContainer.appendChild(phoneCard);


  })
}

// Handle Search Button
const handleSrchBtn= ()=>{
  // console.log('seaarch button handled!')
  const searchField=document.getElementById('search-field');
  const searchText=searchField.value;
  // console.log(searchText);

  loadPhone(searchText);
}

// loadPhone();

