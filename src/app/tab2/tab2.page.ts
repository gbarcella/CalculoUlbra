import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //Utilizado para saber quanto preciso para passar na presencial
  g1_preciso: string;

  //Utilizado para saber se passei na presencial
  g1_passei: string;
  g2_passei: string;

  constructor(
    public alertController: AlertController,
  ) {}


  precisoG2(g1) {
    g1 = this.g1_preciso;
    let resultado = (18 - g1) / 2;
    let resultadoRedondo = parseFloat(resultado.toFixed(2));
    console.log("Voce precisa tirar: " + resultadoRedondo);

    let mensagemAlert = "Você precisa tirar: " + resultadoRedondo;
    let mensagemValidacao = "Ex: 5 ou 7,1";

    if(resultadoRedondo >=6) {
      this.presentAlertDificilAprovado(mensagemAlert);
    } else if(Number.isNaN(resultadoRedondo)) {
      this.presentAlertValidacao(mensagemValidacao);
    } else {
      this.presentAlertQuaseAprovado(mensagemAlert);
    }
  }

  passeiDisciplina(g1, g2) {
    g1 = this.g1_passei;
    g2 = this.g2_passei;
    let resultado = (g1 + (g2 *2)) /3;
    let resultadoRedondo = parseFloat(resultado.toFixed(2));
    console.log("Média: "+resultadoRedondo);

    let mensagemAlert = "Sua média foi: " + resultadoRedondo;
    let mensagemValidacao = "Ex: 5 ou 7,1";

    if(resultadoRedondo >= 6) {
      this.presentAlertAprovado(mensagemAlert);
    } else if(Number.isNaN(resultadoRedondo)) {
      this.presentAlertValidacao(mensagemValidacao);
    } else {
      this.presentAlertReprovado(mensagemAlert);
    }
    
  }

  async presentAlertAprovado(mensagem) {
    const alert = await this.alertController.create({
      header: 'Uhuuuuuuuuu',
      subHeader: 'Você passou!',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertReprovado(mensagem) {
    const alert = await this.alertController.create({
      header: 'Putz, que pena...',
      subHeader: 'Não desanima, bora estudar e passar na substituição',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertQuaseAprovado(mensagem) {
    const alert = await this.alertController.create({
      header: 'Uhuuuuuuuuu',
      subHeader: 'Tá facil!',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertDificilAprovado(mensagem) {
    const alert = await this.alertController.create({
      header: 'Eita, cuidado hein!',
      subHeader: 'Não dá mole!',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertValidacao(mensagem) {
    const alert = await this.alertController.create({
      header: 'Ops, o campo ficou vazio!',
      subHeader: 'Digita algo ai!',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }


}
