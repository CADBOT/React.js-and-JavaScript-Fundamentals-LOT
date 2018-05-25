function sayGoodbye(name='tom', bye='goodbye') {
  //bye = bye || 'goodbye'
  /*
  if (bye === undefined) {
    bye = 'goodbye'
  }
  */
  console.log(bye + ' ' + name)
}
sayGoodbye('sally', 'cya')
sayGoodbye('joe', 'goodbye')
sayGoodbye('joe', 'see you soon')

sayGoodbye('jack')
sayGoodbye('peter')
