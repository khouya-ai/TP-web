## TD n°2: Schéma XML
Réalisé par **Oussama KHOUYA**

Ce TP s'agit de la création et la validation de documents XML en utilisant des schémas de validation XSD (XML Schema Definition)  :

### Sujet N°1: 
1. Créez un fichier xml qui soit valide pour le schéma ***schema.xsd*** suivant:
````xml
<?xml version="1.0" encoding="UTF-8"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <xsd:element name="truc" type="Compose"/>

    <xsd:complexType name="Compose">
        <xsd:sequence>
            <xsd:element name="machin" type="xsd:string" minOccurs="2" maxOccurs="2"/>
            <xsd:element name="bidule" type="xsd:integer" maxOccurs="unbounded"/>
        </xsd:sequence>
    </xsd:complexType>
</xsd:schema>
````
Exemple: 

````xml
<?xml version="1.0" encoding="UTF-8"?>
<truc xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="schema.xsd">
    <machin>Premier machin</machin>
    <machin>Deuxième machin</machin>
    <bidule>10</bidule>
    <bidule>20</bidule>
</truc>
````

2. Créez un fichier xml qui soit valide pour le schéma suivant,
````xml
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <xsd:element name="truc">
        <xsd:complexType>
            <xsd:sequence>
                <xsd:element name="machin" type="xsd:string" minOccurs="2" maxOccurs="2"/>
                <xsd:element name="bidule" type="xsd:integer" maxOccurs="unbounded"/>
            </xsd:sequence>
        </xsd:complexType>
    </xsd:element>
</xsd:schema>
````
Ce schéma est légèrement différente de la première, le type complexe est défini directement à l’intérieur de l’élément truc,
au lieu d’être défini séparément avec un name="Compose".

3. a. Créez un schéma XML correspondant à la DTD suivante
`````xml
<!ELEMENT cdtheque (cd*) >
<!ELEMENT cd (titre,artiste,style?)>
<!ELEMENT titre (#PCDATA)>
<!ELEMENT style (#PCDATA)>
<!ELEMENT artiste (#PCDATA)>

`````
`````xml
<?xml version="1.0" encoding="UTF-8"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    
    <xsd:element name="cdtheque">
        <xsd:complexType>
            <xsd:sequence>
                <xsd:element name="cd" minOccurs="0" maxOccurs="unbounded">
                    <xsd:complexType>
                        <xsd:sequence>
                            <xsd:element name="titre" type="xsd:string"/>
                            <xsd:element name="artiste" type="xsd:string"/>
                            <xsd:element name="style" type="xsd:string" minOccurs="0"/>
                        </xsd:sequence>
                    </xsd:complexType>
                </xsd:element>
            </xsd:sequence>
        </xsd:complexType>
    </xsd:element>
    
</xsd:schema>

`````
3. b. On ajoute des attributs au niveau de cdtheque date et proprietaire et il faut que la date soit entre le 1er janvier 1990 et le 1er janvier 2030
````xml
<?xml version="1.0" encoding="UTF-8"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">

    <xsd:element name="cdtheque">
        <xsd:complexType>
            <xsd:sequence>
                <xsd:element name="cd" minOccurs="0" maxOccurs="unbounded">
                    <xsd:complexType>
                        <xsd:sequence>
                            <xsd:element name="titre" type="xsd:string"/>
                            <xsd:element name="artiste" type="xsd:string"/>
                            <xsd:element name="style" type="xsd:string" minOccurs="0"/>
                        </xsd:sequence>
                    </xsd:complexType>
                </xsd:element>
            </xsd:sequence>
            <xsd:attribute name="date" use="required">
                <xsd:simpleType>
                    <xsd:restriction base="xsd:date">
                        <xsd:minInclusive value="1990-01-01"/>
                        <xsd:maxInclusive value="2030-01-01"/>
                    </xsd:restriction>
                </xsd:simpleType>
            </xsd:attribute>
            <xsd:attribute name="proprietaire" type="xsd:string" use="required"/>
        </xsd:complexType>
    </xsd:element>

</xsd:schema>

````
3. c. Exemple de document XML valide et  invalide (problème de date)

````xml
<?xml version="1.0" encoding="UTF-8"?>
<cdtheque date="2025-04-28" proprietaire="Oussama"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="schema.xsd">
    <cd>
        <titre>Blue Suede Shoes</titre>
        <artiste>Elvis Presley</artiste>
        <style>Rock</style>
    </cd>
    <cd>
        <titre>APT</titre>
        <artiste>Bruno Mars</artiste>
    </cd>
</cdtheque>

````
````xml
<?xml version="1.0" encoding="UTF-8"?>
<cdtheque date="1985-12-31" proprietaire="Oussama"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="schema.xsd">
    <cd>
        <titre>9 To 5</titre>
        <artiste>Dolly Parton</artiste>
    </cd>
</cdtheque>

````

### Sujet N°2 :
#### Les modifications à apporter à notre schéma XML sont:
- Ajouter l'attribut sexe pour élément personne

````xml
<xsd:element name="personne">
    <xsd:complexType>
        <xsd:sequence>
            <xsd:element ref="nom"/>
            <xsd:element ref="prenom"/>
            <xsd:element ref="adresse"/>
            <xsd:element ref="telephones"/>
            <xsd:element ref="emails"/>
        </xsd:sequence>
        <xsd:attribute name="sexe">
            <xsd:simpleType>
                <xsd:restriction base="xsd:string">
                    <xsd:enumeration value="masculin"/>
                    <xsd:enumeration value="feminin"/>
                </xsd:restriction>
            </xsd:simpleType>
        </xsd:attribute>
    </xsd:complexType>
</xsd:element>

````

- Ajouter l'élément repertoire (root)

````xml
 <xsd:element name="repertoire">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element ref="personne" maxOccurs="unbounded"/>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>
````