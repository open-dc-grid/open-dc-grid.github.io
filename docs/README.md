---
editLink: true
---

# Open DC Grid
<center>

![Grid Overview](./images/grid-overview.svg)

</center>

::: tip
ODG gave an overview presentation on the project and our use of the 
[Zephyr RTOS](https://www.zephyrproject.org/) in power systems at the 
[LFEnergy Spring Summit](https://events.linuxfoundation.org/lf-energy-spring-summit/):
 
[Video recording](https://youtu.be/SWDM7YgT-pU) 

[Presentation](https://static.sched.com/hosted_files/lfenergyspringsummit2021/9f/Gula%20and%20Jäger%20-%20ODG%20LFEnergy%20Spring%20Summit.pdf)
:::

## DC Microgrid
The Open DC Grid is a microgrid architecture to permit devices to exchange electric power using DC (direct current). The architecture is defined by the [Open DC Grid Standard](./standard), a document than can be freely accessed and used by anyone at no charge.
The architecture defined by the standard permits devices to be connected using several kinds of link technology but the most commonly used link is an electrical bus operating at a nominal 48 V.
The 48V bus link is wired using a configuration referred to as separated extra-low voltage (SELV) and is designed to be inherently safe for humans to touch in most environments.
The Open DC Grid is particularly well suited for distributing power in Solar Home Systems often used when normal AC power is unavailable or unaffordable.

## Smart Grid
Devices in the Open DC Grid communicate to optimize the use of the limited power typically available in a remote microgrid. Appliances identify themselves and the available power is assigned on a priority basis by the owner or grid manager.
Power sources coordinate to source power reliably when connected to a common bus. Individual homes with a Solar Home System can choose to share power with their neighbors under terms defined by the grid manager.

The grid provides basic communications with a protocol hierarchy defined by the Standard. The upper layers are device independent. The physical layers depend on the type of link.
An Open DC Grid micgrogrid can run completely stand-alone without connection to the outside world. Bridges to standard Internet protocols can potentially be used to link devices to the Internet for remote monitoring and management.
The Standard defines low level protocols to support billing mechanisms such as pay-as-you-go but depends on reseller provided software to incorporate these low-level protocols
into their own customer interface and billing software.

## Open Source
The standard has been developed by volunteers participating in the Open DC Grid Project collaborating using open source methods. Anyone is welcome to paticipate. Visit the [How to Participate](./contributing) page to learn how you can get involved.
[Reference implementations](./implementation) for devices that implement the standard are in development using Open Hardware. OEMs are free to incorporate these reference designs into their own cost-optimized products.
Software is being developed under business-friendly licenses for embedding into devices or use in management platforms.
