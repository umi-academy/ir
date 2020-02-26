/*
Copyright (C): 2020, UMI Academy
modified by Ninh.D.H
*/

/**
 * IR remote
 */
//% icon="\uf1eb" weight=19 color=50
namespace UUMI_REMOTE {

    /**
    * initialization
    */
    //% blockId=Mbit_IR_init
    //% blockGap=20 weight=90
    //% block="connect ir receiver to %pin"
    //% shim=UMI_REMOTE::init
    export function init(pin: Pins): void {
      return
    }
  
    /**
    * button pushed.
    */
    //% blockId=Mbit_IR_received_event
    //% blockGap=20 weight=89
    //% block="on |%btn| button pressed"
    //% shim=UMI_REMOTE::onPressEvent
    export function onPressEvent(btn: RemoteButton, body:Action): void {
      return
    }
  
  
  }
  