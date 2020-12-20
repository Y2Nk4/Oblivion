# Oblivion
(adj.) the state of being unaware of what is happening around you

Oblivion is an opensource house temperature visualization and control panel

This project will be separated into several parts.

## Structure
```
======================================              =============       ========================
| Oblivion Center                    |   mongoose   | MongoDB   |       | FrontEnd             |
|                                    | =============|           |       |                      |
| the backend system based on        |              =============       | Vue, Vue-Antd        |
| Node & Koa                         |==================================| ECharts for graphs   |
======================================                                  |                      |
                ||                                                      ========================
                || Data Packed by ProtoBuf
                || through UDP broadcast
                ||
                |================================|
                ||                              ||
=========================               =========================
| Heater/AC Control     |               | Temp Sensors          |
|                       |               |                       |
| Dev-boards            |               | Dev-boards,           |
| Arduino               |               | DHT-22 Sensors        |
| 3D Printing for Case  |               | Arduino               |
| Power By USB Adapters |               | 3D Printing for Case  |
=========================               | Run By Batteries      |
                                        =========================

```

## To-Dos


## Change Logs


## License

[MIT](http://opensource.org/licenses/MIT)


