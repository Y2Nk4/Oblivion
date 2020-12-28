# Device Discovery

Oblivion discovers devices by UDP Broadcast

Data Packet Encoded By Protocol Buffer

>#### 1. Discovery Init Packet (From Client to Sensor Center)

The client should use udp to broadcast its information in
the following format once it is connect to the network.

|Field|DataType|Description|
|---|---|---|
|req_flag|uint16|0xFFC2|
|discovery_port|uint16|UDP Port for returning discovery data|

Example Code to broadcast packets:
```Arduino
broadcastIp = ~uint32_t(WiFi.subnetMask()) | uint32_t(WiFi.gatewayIP());
Udp.beginPacket(broadcastIp, 1122);
Udp.write(t_str); // t_str is the data
Udp.endPacket();
```

>#### Discovery Response Packet (From Sensor Center to Client)

The client should receive the response packet in the following format.

The response packet contains the information (ex. MQTT Broker IP, Ports, etc.)
for the client to connect to the Sensor Center via MQTT.

Once the client receives and successfully parses the response packet, the client
should establish a connection with the MQTT Broker with the given information in
the packet.

Then, the client should publish a MQTT message to register.

|Field|DataType|Description|
|---|---|---|
|response_flag|uint16|0xFFC3|
|sensor_center_ip|4*uint8|The IP of Sensor Center|
|sensor_center_mqtt_port|uint16|Port of MQTT Broker|
|register_topic_len|uint16|Length of the register topic|
|register_topic|raw data|Register topic|
