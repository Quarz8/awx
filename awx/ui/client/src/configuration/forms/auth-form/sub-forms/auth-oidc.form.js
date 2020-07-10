/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

export default ['i18n', function(i18n) {
    return {
        name: 'configuration_oidc_template',
        showActions: true,
        showHeader: false,

        fields: {
            SOCIAL_AUTH_OIDC_INPUT_1: {
                type: 'text',
                reset: 'SOCIAL_AUTH_OIDC_INPUT_1'
            },
            SOCIAL_AUTH_OIDC_INPUT_2: {
                type: 'text',
                reset: 'SOCIAL_AUTH_OIDC_INPUT_2'
            },
            SOCIAL_AUTH_OIDC_INPUT_3: {
                type: 'sensitive',
                hasShowInputButton: true,
                reset: 'SOCIAL_AUTH_OIDC_INPUT_3'
            },
        },

        buttons: {
            reset: {
                ngShow: '!user_is_system_auditor',
                ngClick: 'vm.resetAllConfirm()',
                label: i18n._('Revert all to default'),
                class: 'Form-resetAll'
            },
            cancel: {
                ngClick: 'vm.formCancel()',
            },
            save: {
                ngClick: 'vm.formSave()',
                ngDisabled: true
            }
        }
    };
}
];
