describe('Ext.data.validator.Phone', function() {
    var invalid = [
            undefined,
            null,
            '',
            'abc',
            '000-0000',
            '111-1111',
            '(415 555-1212',
            '415)555-1212',
            '+0112 415.555.1212 x1234',
            '+0112-415.555.1212 x1234',
            '0112-415.555.1212 x1234',
            '412-555-1212 b55555'
        ],
        valid = [
            '555-1212',
            '555.1212',
            '555 1212',
            '5551212',

            '555-1212 x1',
            '555.1212 x1',
            '555 1212 x1',
            '5551212 x1',

            '555-1212x22',
            '555.1212x22',
            '555 1212x22',
            '5551212x22',

            '555-1212 ext333',
            '555.1212 ext333',
            '555 1212 ext333',
            '5551212 ext333',

            '555-1212ext4444',
            '555.1212ext4444',
            '555 1212ext4444',
            '5551212ext4444',

            '412-555-1212',
            '412.555.1212',
            '412 555 1212',
            '4125551212',
            '(412) 5551212',
            '(412)5551212',

            '412-555-1212 x55555',
            '412.555.1212 x55555',
            '412 555 1212 x55555',
            '4125551212 x55555',
            '(412) 5551212 x55555',
            '(412)5551212 x55555',

            '412-555-1212x666666',
            '412.555.1212x666666',
            '412 555 1212x666666',
            '4125551212x666666',
            '(412) 5551212x666666',
            '(412)5551212x666666',

            '412-555-1212 ext7777777',
            '412.555.1212 ext7777777',
            '412 555 1212 ext7777777',
            '4125551212 ext7777777',
            '(412) 5551212 ext7777777',
            '(412)5551212 ext7777777',

            '412-555-1212ext88888888',
            '412.555.1212ext88888888',
            '412 555 1212ext88888888',
            '4125551212ext88888888',
            '(412) 5551212ext88888888',
            '(412)5551212ext88888888',

            '+011 415 555 1212',
            '+011-415-555-1212',
            '+011.415.555.1212',
            '+0114155551212',

            '+011 415 555 1212 x999999999',
            '+011-415-555-1212 x999999999',
            '+011.415.555.1212 x999999999',
            '+0114155551212 x999999999',

            '+011 415 555 1212x 0000000000',
            '+011-415-555-1212x 0000000000',
            '+011.415.555.1212x 0000000000',
            '+0114155551212x 0000000000',

            '+011 415 555 1212 ext 1 ',
            '+011-415-555-1212 ext 1 ',
            '+011.415.555.1212 ext 1 ',
            '+0114155551212 ext 1 ',

            '+011 415 555 1212ext 22  ',
            '+011-415-555-1212ext 22  ',
            '+011.415.555.1212ext 22  ',
            '+0114155551212ext 22  '
        ],
        v;

    function validate (value) {
        v = new Ext.data.validator.Phone();

        return v.validate(value);
    }

    afterEach(function () {
        v = null;
    });

    it('should not validate if the value is not a valid phone number', function () {
        var i, len, test;
        
        for (i = 0, len = invalid.length; i < len; i++) {
            test = invalid[i];
            
            expect(validate(test)).toBe(v.getMessage());
        }
    });

    it('should validate phone numbers', function() {
        var i, len, test;
        
        for (i = 0, len = valid.length; i < len; i++) {
            test = valid[i];
            
            expect(validate(test)).toBe(true);
        }
    });

    it('should accept a custom message', function() {
        v = new Ext.data.validator.Phone({
            message: 'Foo'
        });

        expect(v.validate()).toBe('Foo');
    });
});
