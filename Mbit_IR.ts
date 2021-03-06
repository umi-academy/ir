/*
Copyright (C): 2020, UMI Academy
modified by Ninh.D.H
*/

/**
 * IR remote
 */
//% icon="\uf1eb" weight=19 color=50
namespace UMI_Remote {

    /**
    * initialization
    */
    //% blockId=Mbit_IR_init
    //% blockGap=20 weight=90
    //% block="Start remote with %pin"
    //% shim=Mbit_IR::init
    export function init(pin: Pins): void {
      return
    }
  
    /**
    * button pushed.
    */
    //% blockId=Mbit_IR_received_event
    //% block="on |%btn| button pressed"
    //% btn.fieldEditor="gridpicker"
    //% btn.fieldOptions.columns=3
    //% btn.fieldOptions.tooltips="false"
    //% weight=69
    //% shim=Mbit_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body:Action): void {
      return
    }
  
  
  }
  