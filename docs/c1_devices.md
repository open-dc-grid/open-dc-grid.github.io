# Devices and appliances

The following chapters describe ideas for actual implementation of devices or the nanogrid controller.

## Nanogrid controller power stage

The following image shows the implementation of the DC/DC power stage integrated in a possible nanogrid controller.

![Nanogrid controller DC/DC power stage](./images/grid-controller-power-stage.svg)

Grid switching and current measurement should be implemented on the high-side in order to provide a consistent ground path.

## Node types

### SHS

* Retrofit to existing SHS systems
    * At battery port
        * Normally not accessible to the user
        * Interference with SOC calculation or other battery diagnosis functions of existing charge controllers possible
    * At load port
        * Necessary to detect if load port is switched off by SHS
        * Voltage target setpoint for nanogrid controller at around 13.6 V (works for all 12V battery chemistries)
* Dedicated nanogrid-connected household
    * Without battery / PoL converter (if possible)
    * With small battery as buffer (easier control)

### Battery

Ideally 12 V or 24 V batteries to remain below the nanogrid voltage and allow use of simple synchronous buck converters.

### PV module

Possibly 60-cell modules could still be connected at the low-side of the nanogrid controller?
