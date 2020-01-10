# Requirements

As a high-level requirement, the nanogrid should provide the following features:

- Interconnect households in rural areas using
- Plug-and play operation
- Safe (<60 V) and reliable

::: warning ToDo
Not limited to energy access applications: Extend for use on building level or other possible use cases.
:::

## Power demands

Expected power per household grid connection (t.b.c.):

- 250 W peak
- 50 W avg

The power level can be higher if the connection between energy storage/source and load is short.

Devices depending on site type:

- Households
  - Lighting, phone charging, radio, TV
- Productive use
  - Printer, laptop, mills, welding machines
  - Loads with high peak power need local battery for buffering.
- Shops
  - Lighting, phone charging as business, radio, TV, fridge

## Safety

Grid voltage always below 60V (SELV = safe to touch).

Protection against

- Short circuit
- Overcurrent
- Reverse polarity during assembly
- Arcing

## Metering

Accuracy: t.b.d.

Tempering protection should be implemented.

## Easy to use

Automatic recovery after fault conditions.

Simple and straightforward installation.

## Reliability

Mesh topology should be supported to provide redundant current paths.
