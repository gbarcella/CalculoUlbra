import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Utilizado para saber se passei na disciplina
  g1v_passei: string;
  g2v_passei: string;
  g2p_passei: string;

  //Utilizado para saber quanto preciso para passar na disciplina
  g1v_preciso: string;
  g2v_preciso: string;

  constructor(
    public alertController: AlertController,
  ) {}

  precisoG2P(g1v, g2v) {
    g1v = this.g1v_preciso;
    g2v = this.g2v_preciso;

    let resultado = ((18-(g1v+((g2v*0.2)*2)))*1.25)/2;
    let resultadoRedondo = parseFloat(resultado.toFixed(2));
    console.log('Você precisa tirar: ' + resultadoRedondo);

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

  passeiDisciplina(g1v, g2v, g2p) {
    g1v = this.g1v_passei;
    g2v = this.g2v_passei;
    g2p = this.g2p_passei;
    
    let resultado = ((g1v) + (((g2v * 0.2) + (g2p * 0.8)) *2)) /3;
    let resultadoRedondo = parseFloat(resultado.toFixed(2));
    console.log("Média: " + resultadoRedondo);

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
