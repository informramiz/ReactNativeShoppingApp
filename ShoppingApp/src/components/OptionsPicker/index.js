import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const OptionsPicker = ({ label, placeholder, value, options, onValueChange, titleExtractor, keyExtractor, style }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const onOptionSelected = (option) => {
        setModalVisible(false);
        onValueChange(option);
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <Pressable style={styles.inputContainer} onPress={() => setModalVisible(true)}>
                { value ? (
                    <Text style={styles.input}>{titleExtractor(value)}</Text>
                ) : (
                    <Text style={styles.placeholder}>{placeholder}</Text>
                )}
            </Pressable>


            <Modal transparent style={styles.modal} visible={isModalVisible}>
                <Pressable style={styles.modalFullScreenContainer} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalHeader}>Select Option</Text>

                        <View style={styles.modalOptionsContainer}>
                            { options?.map( option => {
                                const key = keyExtractor(option);
                                const title = titleExtractor(option);
                                const isSelectedOption = keyExtractor(value) == key;

                                return (
                                    <Text 
                                        style={[styles.modalOption, isSelectedOption ? styles.modalSelectedOption : {}]} 
                                        key={key}
                                        onPress={ () => onOptionSelected(option) }>
                                            {title}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}

export default React.memo(OptionsPicker);