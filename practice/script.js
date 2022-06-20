function fakeBin(x) {
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) < 5) {
      x = x.replace(x.charAt(i), '0')
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) >= 5) {
      x = x.replace(x.charAt(i), '1')
    }
  }

  console.log(x)
}

fakeBin('45385593107843568')
