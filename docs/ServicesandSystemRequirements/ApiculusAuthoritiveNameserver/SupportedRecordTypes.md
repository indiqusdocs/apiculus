---
sidebar_position: 4
---
# Supported Record Types

A53 is configured to supports the following record types:

| Record Type | Description                                                                                                                                                                                                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A           | The A record contains an IP address. It is stored as a decimal dotted quad string, for example: `203.0.113.210`.                                                                                                                                                                                                                             |
| CNAME       | The CNAME record specifies the canonical name of a record. It is stored plainly. Like all other records, it is not terminated by a dot. A sample might be `webserver-01.yourcompany.com`.                                                                                                                                                    |
| TXT         | The TXT record can be used to attach textual data to a domain. Text is stored plainly, PowerDNS understands content not enclosed in quotes.                                                                                                                                                                                                  |
| MX          | The MX record specifies a mail exchanger host for a domain. Each mail exchanger also has a priority or preference. For example `10 mx.example.net`. In the generic SQL backends, the `10` should go in the ‘priority field’.                                                                                                                 |
| SRV         | The SRV records can be used to encode the location and port of services on a domain name. When encoding, the priority field is used to encode the priority. For example, `_ldap._tcp.dc._msdcs.conaxis.ch SRV 0 100 389 mars.conaxis.ch` would be encoded with `0` in the priority field and `100 389 mars.conaxis.ch` in the content field. |
| PTR         | Reverse pointer, used to specify the host name belonging to an IPv4 or IPv6 address.                                                                                                                                                                                                                                                         |
| ALIAS       | The ALIAS pseudo-record type is supported to provide CNAME-like mechanisms on a zone’s apex.                                                                                                                                                                                                                                                 |




