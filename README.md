# Oblivion
(adj.) the state of being unaware of what is happening around you

Oblivion is an opensource house temperature visualization and control panel

This project will be separated into several parts.

Build with [Y2Nk4/node-koa-web-api-template](https://github.com/Y2Nk4/node-koa-web-api-template)

## Structure
```
======================================              =============       ========================
| Oblivion Center                    |   mongoose   | MongoDB   |       | FrontEnd             |
|                                    |==============|           |       |                      |
| the backend system based on        |              =============       | Vue, Vue-Antd        |
| Node & Koa                         |==================================| ECharts for graphs   |
| MQTT & Aedes                       |                                  |                      |
======================================                                  ========================
                ||
                || Data Packed by ProtoBuf
                || through MQTT
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

## API Reference
[API Reference](./docs/api.md)

## To-Dos


## Change Logs


## License

[MIT](http://opensource.org/licenses/MIT)


