# MQTT Topics

### Topics Naming Spec

For further plugin development, the Topics Names should follow
this rules:

```
{namespace}/{plugin_name}-{topic_name}

each portion should be snake case
```

For example, Device Register topic is
```
oblivion/discover-device_register
```

To push message to a specific device, using:
```
{namespace}/{plugin_name}-{topic_name}-{device_id}
```

For example:
```
oblivion/discover-device_register_response-temp-node-A7:01...
```

### Default Topics

|topic name|description|
|---|---|
|**Discover**|
|oblivion/discover-device_register|to register device in the system|
|**Recorder**|
|oblivion/recorder-rec_temp_node|to record data from temperature nodes|
