console.log('Hello estoy actualizando...');

//anonimous function self invoked, for independient purposes

(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroe:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum strong {
       acuaman = 0,
       batman = 1,
       flash =5,
       superman = 100
    }
    
    const fuerzaFlash: strong = strong.flash;
    const fuerzaSuperman: strong = strong.superman;
    const fuerzaBatman: strong = strong.batman;
    const fuerzaAcuaman: strong = strong.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  