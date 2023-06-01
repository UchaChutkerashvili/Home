function mySetTimeout(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}






function mySetTimeout(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function makeToys(delay) {
  return mySetTimeout(delay).then(() => {
    if (Math.random() > 0.1) {
      return "undefected";
    } else {
      return "defected";
    }
  });
}

function sellToys(status, delay) {
  return mySetTimeout(delay).then(() => {
    if (status === "undefected") {
      if (Math.random() > 0.5) {
        return "Toy sold";
      } else {
        return "Toy did not sell";
      }
    } else {
      throw new Error("Defected toys cannot be sold.");
    }
  });
}

function deliverToys(delay) {
  return mySetTimeout(delay).then(() => {
    return "Toys delivered";
  });
}

function promisify() {
  const makeToysDelay = 3000;
  const sellToysDelay = 1000;
  const deliverToysDelay = 2000;

  makeToys(makeToysDelay)
    .then(status => {
      return sellToys(status, sellToysDelay);
    })
    .then(result => {
      console.log(result);
      return deliverToys(deliverToysDelay);
    })
    .then(deliveryResult => {
      console.log(deliveryResult);
    })
    .catch(error => {
      console.log(error);
    });
}

promisify();













//ASYNC AWAIT
async function makeToys(delay) {
  await mySetTimeout(delay);
  if (Math.random() > 0.1) {
    return "undefected";
  } else {
    return "defected";
  }
}


async function sellToys(status, delay) {
  await mySetTimeout(delay);
  if (status === "undefected") {
    if (Math.random() > 0.5) {
      return "Toy sold";
    } else {
      return "Toy did not sell";
    }
  } else {
    throw new Error("Defected toys cannot be sold.");
  }
}

async function deliverToys(delay) {
  await mySetTimeout(delay);
  return "Toys delivered";
}

async function promisify() {
  try {
    const makeToysDelay = 3000;
    const sellToysDelay = 1000;
    const deliverToysDelay = 2000;

    const status = await makeToys(makeToysDelay);
    const result = await sellToys(status, sellToysDelay);
    console.log(result);

    const deliveryResult = await deliverToys(deliverToysDelay);
    console.log(deliveryResult);
  } catch (error) {
    console.log(error);
  }
}


promisify();

